import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ModalProvider } from "Contexts";
import { useMediaQuery } from "Hooks";
import { Container_VH } from "Components";

export const Modals_Base = React.memo(
  ({
    showModal,
    setShowModal,
    id,
    className,
    handleClose,
    values,
    zIndex,
    confirmClose,
    children,
  }) => {
    const [showTrans, setShowTrans] = useState(false);
    const refBase = useRef();
    const getClassName = `modalBase ${className ? ` ${className}` : ""}`;

    useEffect(() => {
      if (showModal) {
        setTimeout(() => setShowTrans(true), 20);
        refBase.current?.classList.add("showOn");
        refBase.current?.focus();
      }
    }, [showModal]);

    const handleModalClose = useCallback(
      async (e) => {
        try {
          //confirm
          const getConfirm = confirmClose?.();
          const checkConfirm = getConfirm !== undefined;
          if (checkConfirm && !getConfirm) return;

          e?.stopPropagation();
          await handleClose?.();
          const layers = document.querySelectorAll(".layerBase");
          const modals = document.querySelectorAll(".modalBase");

          const filterBase = (base) =>
            Array.from(base).filter((divElement) => {
              const checkChild = divElement.childNodes.length > 0;
              const checkOn = divElement.className.includes("showOn");
              const checkSelf = divElement.className.includes(className);

              return checkChild && checkOn && !checkSelf;
            });
          const filterModal = filterBase(modals);
          const filterLayer = filterBase(layers);
          const lastModal = filterModal[0];
          const lastLayer = filterLayer.at(-1);

          lastModal ? lastModal.focus() : lastLayer ? lastLayer.focus() : null;

          refBase.current?.classList.remove("showOn");

          setShowTrans(false);
          setTimeout(() => {
            setShowModal(false);
          }, 200);
        } catch (err) {
          console.log(err);
        }
      },
      [refBase?.current, handleClose]
    );

    const handleESC = (e) => e.keyCode === 27 && handleModalClose(e);

    const value = { ...(values || {}), handleModalClose };

    const isMobile = useMediaQuery({ maxWidth: 768 });

    const render = createPortal(
      <Base
        height={100}
        ref={refBase}
        id={id}
        className={getClassName}
        show={showModal}
        tabIndex="0"
        $zIndex={zIndex}
        $isMobile={isMobile}
        onKeyDown={handleESC}
      >
        <TransitionBase show={showTrans} onClick={handleModalClose}>
          {showModal && <ModalProvider value={value}>{children}</ModalProvider>}
        </TransitionBase>
      </Base>,
      document.getElementById("rootModal")
    );
    return render || null;
  }
);

const Base = styled(Container_VH)`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: ${(props) => 40000000 + (props.$zIndex || 0)};

  &:hover {
    cursor: auto;
  }
`;
const TransitionBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.show ? 1 : 0)};
  background: rgba(0, 0, 0, 0.5);
  transition: 0.2s;
`;
