import React, { ReactNode } from "react";

interface LogoContainerProps {
    children: ReactNode;
}

const LogoContainer = ({ children }: LogoContainerProps) => (
    <div className="w-[50px] h-[50px] transform transition duration-300 hover:scale-110 transform-gpu">
        {children}
    </div>
);

export default LogoContainer;