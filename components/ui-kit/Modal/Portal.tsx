import React from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";
const BasePortalWrapper = styled.div``;

export const BasePortal: React.FC<{children: React.ReactNode}> = ({children, ...props}) => {
    if (typeof window !== 'undefined')
        return ReactDOM.createPortal(<BasePortalWrapper {...props}>{children}</BasePortalWrapper>, document.body);
    return null;
};
