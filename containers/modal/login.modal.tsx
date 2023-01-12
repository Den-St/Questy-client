import { useState } from "react"
import { Container } from "../../components/ui-kit/Modal/Container";
import { Overlay } from "../../components/ui-kit/Modal/overlay";
import { BasePortal } from "../../components/ui-kit/Modal/Portal";
import { LoginModalContainer } from "../LoginModal/index";

type Props = {
    button:React.ReactNode
}

export const LoginModal:React.FC<Props> = ({button}) => {
    const [opened,setOpened] = useState(false);
    return <>
        <div onClick={() => setOpened(true)}>
            {button}
        </div>
        {opened && <BasePortal>
            <Container>
                <Overlay onClick={() => setOpened(false)}/>
                <LoginModalContainer/>
            </Container>
        </BasePortal>}
    </>
}