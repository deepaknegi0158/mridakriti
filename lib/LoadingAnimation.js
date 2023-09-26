"use client"
import { useEffect } from "react";

export function useLoadingAnimation(setLoading) {
    useEffect(() => {
        const animationDuration = 2000;
        const holdDuration = 500;

        // check if the loading animation has already been shown
        const hasAnimationRun = sessionStorage.getItem('hasAnimationRun');

        if (!hasAnimationRun) {
            const timer = setTimeout(() => {
                setLoading(false);

                //store in local storage that the animation has run
                sessionStorage.setItem('hasAnimationRun', 'true');
            }, animationDuration + holdDuration);

            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, []);
}