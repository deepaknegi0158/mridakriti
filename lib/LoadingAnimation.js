"use client"
import { useEffect } from "react";

export function useLoadingAnimation(setLoading) {
    useEffect(() => {
        const animationDuration = 3000;
        const holdDuration = 1000;

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