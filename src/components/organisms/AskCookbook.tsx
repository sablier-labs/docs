import React from "react";
import BaseAskCookbook from "@cookbookdev/docsbot/react";

/** It's going to be exposed in HTTP requests anyway so it's fine to just hardcode it here */
const COOKBOOK_PUBLIC_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODI2NTMwM2FiYTQyMjdjNzM4OGM1NmUiLCJpYXQiOjE3NDczNDIwODMsImV4cCI6MjA2MjkxODA4M30.ElatCquv6yYsS1JKGErcZqpknFi9MoICM7_vQf7XsVg";
export const AskCookbook = () => {
  return <BaseAskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />;
};
