/**
 * Responsive design width for different screen sizes
 */
export const responsive = 
{
    desktop: "1440px",
    laptop: "1024px",
    mobile: "650px",
    mobile_small: "365px",
    laptop_height: "1210px",
    mobile_height: "500px"
}

/**
 * Color palette for the style of the 
 */
export const colorPalette = 
{
    primary: {
        backGroundDefault: "#040611",
        colorDefault: "#FFFFFF",
        button: {
            color: [
                "#31091f",
                "#C7046A"
            ],
            border: [
                "#31091f",
                "#C7046A"
            ],
            hover: {
                color: "#FFFFFF",
                backGroundColor: [
                    "#31091f",
                    "#C7046A"
                ]
            }
        },
        text: {
            paragraph: {
                color: "#BBBBBB"
            },
            color: "#C7046A",
            border: "#C7046A"
        },
    },
    header: {
        link: {
            color: "#B9B9B9",
            hover: {
                color: "#FFFFFF"
            },
            active: {
                color: "#FFFFFF"
            }
        },
        button: {
            backGroundColor: "#000014",
            border: "#FFFFFF",
            hover: {
                backGroundColor: "#002347"
            },
            active: {
                backGroundColor: "#002347"
            }
        }
    },
    main: {
        backGroundDefault: "#0c0c0c",
        cardBackgroundColor: "#130207",
        image: {
            border: [
                "#31091f",
                "#C7046A"
            ],
        }
    },
    footer: {
        table: {
            backGroundColor: "#000014",
            border: "#FFFFFF",
        },
        link: {
            color: "#0059b3",
            hover: {
                backGroundColor: "#0059b3",
                color: "#FFFFFF"
            }
        }
    }
}