import { Button, ModalFooter, Modal, ModalOverlay, Radio, RadioGroup, ModalContent, Stack, useDisclosure, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react"
import { useRef, useState } from "react"

export default function ScrollingModal( { isOpen, onOpen, onClose,content,title }) {
    // const { isOpen, onOpen, onClose } = useDisclosure();

    // const btnRef = useRef(null);
    return (
        <>
            <Modal
                onClose={onClose}
                // finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior={'inside'}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    {content}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}