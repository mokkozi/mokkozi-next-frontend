import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export default (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => <img src="/img/logo.png" alt="logo" {...props} />;