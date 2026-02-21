import type { MicrositeTheme } from '@/lib/microsites';

interface MicrositeThemeWrapperProps {
  theme?: MicrositeTheme;
  children: React.ReactNode;
}

export default function MicrositeThemeWrapper({
  theme,
  children,
}: MicrositeThemeWrapperProps) {
  const style = theme
    ? ({
        '--ms-primary': theme.primaryColor,
        '--ms-primary-hover': theme.primaryColorHover,
        '--ms-hero-gradient': theme.heroGradientColor,
      } as React.CSSProperties)
    : undefined;

  return (
    <div style={style} className="microsite-premium min-h-screen flex flex-col">
      {children}
    </div>
  );
}
