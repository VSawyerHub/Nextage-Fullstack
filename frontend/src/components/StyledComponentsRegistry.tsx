'use client';

import React from 'react';
import { StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager>
      {children}
    </StyleSheetManager>
  );
}
