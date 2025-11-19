import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const Dropdown = ({
	children,
	isOpen = false,
	animationDuration = 300,
	className,
}) => {
	const [isMounted, setIsMounted] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const portalRef = useRef(null);
	const timerRef = useRef(null);

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
			setTimeout(() => setIsVisible(true), 10);
		} else {
			setIsVisible(false);
			timerRef.current = setTimeout(() => {
				setIsMounted(false);
			}, animationDuration);
		}

		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, [isOpen, animationDuration]);

	if (!isMounted) return null;

	return createPortal(
		<div
			className="portal"
			style={{ "--portal-animation-duration": `${animationDuration}ms` }}
		>
			<div
				ref={portalRef}
				className={`portal__content ${
					isVisible ? "portal__content--visible" : ""
				} ${className}`}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
};
