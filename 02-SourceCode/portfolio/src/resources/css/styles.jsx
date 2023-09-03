/**
 * Responsive design width for different screen sizes
 */
export const responsive = 
{
    desktop_big: "1604px",
    desktop: "1440px",
    laptop_big: "1110px",
    laptop: "1024px",
    laptop_small: "899px",
    mobile: "650px",
    mobile_small: "400px",
}

/**
 * Color palette for the style of the 
 */
export const colorPalette = 
{
    primary: {
        backGroundDefault: "#040611",
        colorDefault: "#FFFFFE",
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
        cardBorderColor: [
            "#31091f",
            "#C7046A"
        ],
        image: {
            border: [
                "#31091f",
                "#C7046A"
            ],
        },
        filters: 
        {
            card : 
            {
                backGroundColor : "#1F1F1F",
                borderColor : "#808080",
                borderColorChecked : "#C7046A",
                radio : 
                {
                    borderColor: "#8300446c",
                    backGroundColor: "#C7046A"
                }
            },
            searchBar : 
            {
                borderColor: "#C7046A"
            },
            radioButton : 
            {
                borderColor: "#808080",
                backGroundColor: "transparent",
                checked : 
                [
                    "#C7046A",
                    "#31091f"
                ]
            }
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