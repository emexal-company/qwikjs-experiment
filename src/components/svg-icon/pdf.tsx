import { component$ } from "@builder.io/qwik";

interface PdfIconProps {
  style: any;
}

export const PdfIcon = component$((props: PdfIconProps) => {
  return (
    <svg
      style={props.style}
      height="20"
      width="18"
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6,2A2.013,2.013,0,0,0,4,4V9a2,2,0,0,0-2,2v5a2,2,0,0,0,2,2v2a2.013,2.013,0,0,0,2,2H18a2.013,2.013,0,0,0,2-2V7L15,2ZM6,4h8V8h4V9H6ZM4,11H5.5a1.5,1.5,0,0,1,0,3H5v2H4Zm9,0h3v1H14v1h1.6v1H14v2H13Zm-5,.023H9.629A2.1,2.1,0,0,1,12,13.129V13.9A2.094,2.094,0,0,1,9.615,16H8ZM5,12v1h.5a.5.5,0,0,0,0-1Zm4,.023V15h.615C10.247,15,11,14.808,11,13.9v-.771c0-.914-.745-1.105-1.371-1.105ZM6,18H18v2H6Z"
        fill="black"
        transform="translate(-2 -2)"
      ></path>
    </svg>
  );
});
