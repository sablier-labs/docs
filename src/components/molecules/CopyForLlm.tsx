import { useLocation } from "@docusaurus/router";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

type CopyState = "idle" | "copied" | "error";

const TRAILING_SLASH_RE = /\/$/;
const RESET_DELAY = 2200;

function Icon({ size = 16, children }: { size?: number; children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <Icon>
      <path
        d="M10.5 1h-5A1.5 1.5 0 004 2.5v9A1.5 1.5 0 005.5 13h5a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 1z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M2 4v8.5A1.5 1.5 0 003.5 14H9" stroke="currentColor" strokeWidth="1.2" />
    </Icon>
  );
}

function CheckIcon() {
  return (
    <Icon>
      <path
        d="M3 8.5L6.5 12 13 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Icon>
  );
}

function ErrorIcon() {
  return (
    <Icon>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 4.5v4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" />
      <circle cx="8" cy="11" fill="currentColor" r="0.8" />
    </Icon>
  );
}

function MarkdownIcon() {
  return (
    <Icon>
      <rect height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" width="14" x="1" y="3" />
      <path
        d="M4 10V6l2 2.5L8 6v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <path
        d="M11 8.5l1.5 1.5L14 8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <path d="M12.5 6v4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" />
    </Icon>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-4px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const popIn = keyframes`
  0%   { transform: scale(0.5); opacity: 0; }
  60%  { transform: scale(1.15); }
  100% { transform: scale(1); opacity: 1; }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2px;
`;

const SplitGroup = styled.div`
  display: inline-flex;
  align-items: stretch;
  border-radius: 6px;
  border: 1px solid var(--ifm-color-emphasis-200);
  overflow: hidden;
  transition: border-color 0.15s;

  &:hover {
    border-color: var(--ifm-color-emphasis-300);
  }
`;

const stateStyles = {
  copied: css`
    color: #059669;
    background: rgba(5, 150, 105, 0.08);
    [data-theme="dark"] & {
      color: #34d399;
      background: rgba(52, 211, 153, 0.1);
    }
  `,
  error: css`
    color: #dc2626;
    background: rgba(220, 38, 38, 0.06);
    [data-theme="dark"] & {
      color: #f87171;
      background: rgba(248, 113, 113, 0.1);
    }
  `,
  idle: css`
    color: var(--ifm-color-emphasis-700);
    background: transparent;
    &:hover {
      color: var(--ifm-color-emphasis-900);
      background: var(--ifm-color-emphasis-100);
    }
  `,
};

const MainButton = styled.button<{ $state: CopyState }>`
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 5px 12px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  border-right: 1px solid var(--ifm-color-emphasis-200);
  transition: background 0.15s, color 0.2s;
  ${(p) => stateStyles[p.$state]}

  @media (max-width: 480px) {
    padding: 5px 8px;
  }
`;

const ButtonLabel = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`;

const IconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;

const PopIcon = styled.span`
  display: inline-flex;
  animation: ${popIn} 0.25s ease-out;
`;

const ChevronButton = styled.button<{ $open: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  padding: 0;
  font-size: 0;
  color: var(--ifm-color-emphasis-600);
  cursor: pointer;
  background: transparent;
  border: none;
  transition: background 0.12s, color 0.12s;

  &:hover {
    color: var(--ifm-color-emphasis-900);
    background: var(--ifm-color-emphasis-100);
  }

  svg {
    transition: transform 0.15s;
    transform: ${(p) => (p.$open ? "rotate(180deg)" : "none")};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(100% + 4px);
  right: 0;
  min-width: 240px;
  padding: 4px;
  background: var(--ifm-background-surface-color);
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 8px;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.06);
  animation: ${fadeIn} 0.12s ease-out;
`;

const MenuItem = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding: 8px 10px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: var(--ifm-color-emphasis-800);
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 6px;
  transition: background 0.1s;

  &:hover {
    background: var(--ifm-color-emphasis-100);
    color: var(--ifm-color-emphasis-900);
    text-decoration: none;
  }
`;

const MenuItemIcon = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--ifm-color-emphasis-500);
`;

const MenuItemLabel = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const MenuItemTitle = styled.span`
  font-weight: 600;
  line-height: 1.3;
`;

const MenuItemDesc = styled.span`
  font-size: 11.5px;
  line-height: 1.3;
  color: var(--ifm-color-emphasis-500);
`;

const STATE_LABELS: Record<CopyState, string> = {
  copied: "Copied!",
  error: "Copy failed",
  idle: "Copy for LLM",
};

function StateIcon({ state }: { state: CopyState }) {
  switch (state) {
    case "copied":
      return (
        <PopIcon>
          <CheckIcon />
        </PopIcon>
      );
    case "error":
      return (
        <PopIcon>
          <ErrorIcon />
        </PopIcon>
      );
    default:
      return <ClipboardIcon />;
  }
}

export default function CopyForLlm() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);

  const markdownUrl = `${location.pathname.replace(TRAILING_SLASH_RE, "")}.md`;

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open && dropdownRef.current) {
      const firstItem = dropdownRef.current.querySelector<HTMLElement>("a, button");
      firstItem?.focus();
    }
  }, [open]);

  async function handleCopy() {
    if (busyRef.current) {
      return;
    }
    busyRef.current = true;
    clearTimeout(timerRef.current);

    try {
      const res = await fetch(markdownUrl);
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      const markdown = await res.text();
      await navigator.clipboard.writeText(markdown);
      setCopyState("copied");
      timerRef.current = setTimeout(() => setCopyState("idle"), RESET_DELAY);
    } catch {
      setCopyState("error");
      // Error state persists until next user click
    } finally {
      busyRef.current = false;
    }
  }

  return (
    <Container ref={containerRef}>
      <SplitGroup>
        <MainButton
          $state={copyState}
          aria-label={STATE_LABELS[copyState]}
          onClick={handleCopy}
          type="button"
        >
          <IconWrap>
            <StateIcon state={copyState} />
          </IconWrap>
          <ButtonLabel>{STATE_LABELS[copyState]}</ButtonLabel>
        </MainButton>

        <ChevronButton
          $open={open}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-label="More options"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <Icon size={12}>
            <path
              d="M3 4.5L6 7.5 9 4.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
          </Icon>
        </ChevronButton>
      </SplitGroup>

      {open && (
        <Dropdown ref={dropdownRef} role="menu">
          <MenuItem
            href={markdownUrl}
            onClick={() => setOpen(false)}
            rel="noopener noreferrer"
            role="menuitem"
            target="_blank"
          >
            <MenuItemIcon>
              <MarkdownIcon />
            </MenuItemIcon>
            <MenuItemLabel>
              <MenuItemTitle>View as Markdown</MenuItemTitle>
              <MenuItemDesc>Open raw page source in a new tab</MenuItemDesc>
            </MenuItemLabel>
          </MenuItem>
        </Dropdown>
      )}
    </Container>
  );
}
