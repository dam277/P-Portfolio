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
        backGroundDefault: "#000022",
        colorDefault: "#FFFFFF",
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
        button: {
            color: [
                "#250717",
                "#C7046A"
            ],
            border: [
                "#250717",
                "#C7046A"
            ],
            hover: {
                color: "#FFFFFF",
                backGroundColor: [
                    "#250717",
                    "#C7046A"
                ]
            }
        },
        text: {
            color: "#C7046A",
            border: "#C7046A"
        },
        image: {
            border: "#4e0028"
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