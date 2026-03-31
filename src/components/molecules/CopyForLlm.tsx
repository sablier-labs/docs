import { useLocation } from "@docusaurus/router";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

type CopyState = "idle" | "copied" | "error";

const TRAILING_SLASH_RE = /\/$/;

const COPY_STATE_LABELS: Record<CopyState, string> = {
  copied: "Copied!",
  error: "Failed to copy",
  idle: "Copy Page",
};

const CLIPBOARD_PATH =
  "M10.5 1h-5A1.5 1.5 0 0 0 4 2.5v9A1.5 1.5 0 0 0 5.5 13h5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 10.5 1Z";
const CLIPBOARD_PATH_2 = "M2 4v8.5A1.5 1.5 0 0 0 3.5 14H9";

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
      <path d={CLIPBOARD_PATH} stroke="currentColor" strokeWidth="1.2" />
      <path d={CLIPBOARD_PATH_2} stroke="currentColor" strokeWidth="1.2" />
    </Icon>
  );
}

function CheckIcon() {
  return (
    <Icon>
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
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
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: -0.5rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Trigger = styled.button`
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 6px 12px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--ifm-color-emphasis-700);
  white-space: nowrap;
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 6px;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    color: var(--ifm-color-emphasis-900);
    background: var(--ifm-color-emphasis-100);
    border-color: var(--ifm-color-emphasis-300);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(100% + 4px);
  right: 0;
  min-width: 260px;
  padding: 4px;
  background: var(--ifm-background-surface-color);
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
  animation: ${fadeIn} 0.12s ease-out;
`;

const MenuItem = styled.button`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
  padding: 10px 12px;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 6px;
  transition: background 0.12s;

  &:hover {
    background: var(--ifm-color-emphasis-100);
  }
`;

const MenuIcon = styled.span`
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--ifm-color-emphasis-600);
`;

const MenuText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const MenuTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--ifm-color-emphasis-900);
`;

const MenuDescription = styled.span`
  font-size: 12px;
  line-height: 1.3;
  color: var(--ifm-color-emphasis-600);
`;

const Chevron = styled.svg<{ $open: boolean }>`
  transition: transform 0.15s;
  transform: ${(p) => (p.$open ? "rotate(180deg)" : "none")};
`;

export default function CopyForLlm() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const menuRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const markdownUrl = `${location.pathname.replace(TRAILING_SLASH_RE, "")}.md`;

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    if (!open) {
      return;
    }
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  async function handleCopy() {
    try {
      const response = await fetch(markdownUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch markdown: ${response.status}`);
      }
      const markdown = await response.text();
      await navigator.clipboard.writeText(markdown);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCopyState("idle");
      setOpen(false);
    }, 2000);
  }

  return (
    <Container ref={menuRef}>
      <Trigger
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <ClipboardIcon />
        <span>Copy for LLM</span>
        <Chevron
          $open={open}
          aria-hidden="true"
          fill="none"
          height="12"
          viewBox="0 0 12 12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </Chevron>
      </Trigger>

      {open && (
        <Dropdown role="menu">
          <MenuItem onClick={handleCopy} role="menuitem" type="button">
            <MenuIcon>{copyState === "copied" ? <CheckIcon /> : <ClipboardIcon />}</MenuIcon>
            <MenuText>
              <MenuTitle>{COPY_STATE_LABELS[copyState]}</MenuTitle>
              <MenuDescription>Copy page as Markdown for LLMs</MenuDescription>
            </MenuText>
          </MenuItem>

          <MenuItem
            onClick={() => {
              window.open(markdownUrl, "_blank");
              setOpen(false);
            }}
            role="menuitem"
            type="button"
          >
            <MenuIcon>
              <MarkdownIcon />
            </MenuIcon>
            <MenuText>
              <MenuTitle>View as Markdown</MenuTitle>
              <MenuDescription>View this page as plain text</MenuDescription>
            </MenuText>
          </MenuItem>
        </Dropdown>
      )}
    </Container>
  );
}
