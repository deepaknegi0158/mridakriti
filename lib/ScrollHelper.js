export function createHandleScroll(sectionOffsets, setIsDarkBackground) {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        // console.log(scrollTop);

        // Iterate through the sectionOffsets array and check if scrollTop is greater than or equal to each section's offset
        for (let i = sectionOffsets.length - 1; i >= 0; i--) {
            if (scrollTop >= sectionOffsets[i]) {
                setIsDarkBackground(i % 2 === 0); // Toggle based on the section index
                break; // Exit the loop when the first matching section is found
            }
        }
    }
    return handleScroll;
};