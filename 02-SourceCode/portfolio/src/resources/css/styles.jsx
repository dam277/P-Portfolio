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
        text: {
            paragraph: {
                color: "#898989"
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
                backGroundColor: "#002347",
            },
            active: {
                backGroundColor: "#002347"
            }
        }
    },
    main: {
        backGroundDefault: "#0c0c0c",
        cardBackgroundColor: "#130207",
        detailsCardBackgroundColor: "#060606",
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
                borderColor : "#949494",
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
                borderColor: "#949494",
                backGroundColor: "transparent",
                checked : 
                [
                    "#C7046A",
                    "#31091f"
                ]
            },
            languages : 
            {
                backGroundColor : "#1F1F1F",
                borderColor : "#949494",
            }
        },
        project : 
        {
            notStarted : 
            {
                backGroundColor : "#1F1F1F",
                borderColor : "#949494",
                workCompletionColor: "#949494",
                button: 
                {
                    color: [
                        "#4c4c4c",
                        "#949494"
                    ],
                    border: [
                        "#4c4c4c",
                        "#949494"
                    ],
                    hover: {
                        backGroundColor: [
                            "#4c4c4c",
                            "#949494"
                        ]
                    }
                },
                table: 
                {
                    thead : "#070707",
                    tbody : 
                    [
                        "#1b1b1b",
                        "#292929"
                    ]
                }
            },
            inDevelopment : 
            {
                backGroundColor : "#130207",
                borderColor : "#C7046A",
                workCompletionColor: "#C7046A",
                button: 
                {
                    color: [
                        "#360a22",
                        "#c7046a"
                    ],
                    border: [
                        "#360a22",
                        "#C7046A"
                    ],
                    hover: {
                        backGroundColor: [
                            "#360a22",
                            "#C7046A"
                        ]
                    }
                },
                table: 
                {
                    thead : "#0b0000",
                    tbody : 
                    [
                        "#230012",
                        "#39001e"
                    ]
                }
            },
            finished : 
            {
                backGroundColor : "#021307",
                borderColor : "#018901",
                workCompletionColor: "#018901",
                button: 
                {
                    color: [
                        "#073a16",
                        "#018901"
                    ],
                    border: [
                        "#073a16",
                        "#018901"
                    ],
                    hover: {
                        backGroundColor: [
                            "#073a16",
                            "#018901"
                        ]
                    }
                },
                table: 
                {
                    thead : "#010c04",
                    tbody : 
                    [
                        "#00280b",
                        "#001504"
                    ]
                }
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