export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h32v32H0z" />
    <g filter="url(#b)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.523 23.814a8 8 0 1 1 0-15.628 8.003 8.003 0 0 0 0 15.628"
        fill="url(#c)"
      />
    </g>
    <g filter="url(#d)">
      <circle cx={18.596} cy={16} r={8} fill="url(#e)" />
    </g>
    <defs>
      <linearGradient
        id="a"
        x1={16}
        y1={0}
        x2={16}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2D3C5C" />
        <stop offset={1} stopColor="#111827" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={23.319}
        y1={8}
        x2={23.319}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.9} />
      </linearGradient>
      <linearGradient
        id="e"
        x1={24.72}
        y1={8}
        x2={24.72}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.9} />
      </linearGradient>
      <filter
        id="b"
        x={2.244}
        y={5.333}
        width={16.834}
        height={23.111}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={0.889} />
        <feGaussianBlur stdDeviation={1.778} />
        <feColorMatrix values="0 0 0 0 0.176471 0 0 0 0 0.235294 0 0 0 0 0.360784 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_601_30" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_601_30"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-1.778} />
        <feGaussianBlur stdDeviation={2.667} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0.176471 0 0 0 0 0.235294 0 0 0 0 0.360784 0 0 0 0.12 0" />
        <feBlend in2="shape" result="effect2_innerShadow_601_30" />
      </filter>
      <filter
        id="d"
        x={7.04}
        y={5.333}
        width={23.111}
        height={23.111}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={0.889} />
        <feGaussianBlur stdDeviation={1.778} />
        <feColorMatrix values="0 0 0 0 0.176471 0 0 0 0 0.235294 0 0 0 0 0.360784 0 0 0 0.5 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_601_30" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_601_30"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-1.778} />
        <feGaussianBlur stdDeviation={2.667} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0.176471 0 0 0 0 0.235294 0 0 0 0 0.360784 0 0 0 0.12 0" />
        <feBlend in2="shape" result="effect2_innerShadow_601_30" />
      </filter>
    </defs>
  </svg>
);

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9642 0.244904C5.34833 0.244904 0 5.63266 0 12.298C0 17.626 3.42686 22.1361 8.18082 23.7323C8.77518 23.8523 8.9929 23.473 8.9929 23.1539C8.9929 22.8745 8.97331 21.9167 8.97331 20.9187C5.64514 21.6372 4.95208 19.4819 4.95208 19.4819C4.41722 18.085 3.62473 17.726 3.62473 17.726C2.53543 16.9876 3.70408 16.9876 3.70408 16.9876C4.91241 17.0674 5.54645 18.2248 5.54645 18.2248C6.61592 20.0606 8.33927 19.5419 9.03257 19.2225C9.13151 18.4442 9.44865 17.9055 9.78539 17.6062C7.13094 17.3268 4.33812 16.2891 4.33812 11.6594C4.33812 10.3423 4.81322 9.26474 5.56604 8.4267C5.44727 8.12743 5.03118 6.88996 5.68506 5.23372C5.68506 5.23372 6.69527 4.91437 8.97306 6.47094C9.94827 6.20711 10.954 6.07289 11.9642 6.07176C12.9744 6.07176 14.0042 6.2116 14.9552 6.47094C17.2332 4.91437 18.2434 5.23372 18.2434 5.23372C18.8973 6.88996 18.481 8.12743 18.3622 8.4267C19.1349 9.26474 19.5904 10.3423 19.5904 11.6594C19.5904 16.2891 16.7976 17.3067 14.1233 17.6062C14.5592 17.9853 14.9353 18.7036 14.9353 19.8411C14.9353 21.4575 14.9158 22.7547 14.9158 23.1536C14.9158 23.473 15.1337 23.8523 15.7278 23.7326C20.4818 22.1358 23.9087 17.626 23.9087 12.298C23.9282 5.63266 18.5603 0.244904 11.9642 0.244904Z"
      fill="currentColor"
    />
  </svg>
);
