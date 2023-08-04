// Import images
import abraxas from '../../images/about/careerPath/abraxas.png';
import etml from '../../images/about/careerPath/etml.png';
import school from '../../images/about/careerPath/school.png';

export const CareerPath = 
[
    {
        name: "school",
        image: school,
        current: false,
        dates: 
        {
            "start" : "01.01.2008",
            "end" : "31.08.2018"
        },
        position: 
        {
            date: "right",
            card: "left"
        }
    },
    {
        name: "etml",
        image: etml,
        current: true,
        dates:         
        {
            "start" : "01.02.2019",
            "end" : "{today}"
        },
        position: 
        {
            date: "left",
            card: "right"
        }
    },
    {
        name: "abraxas",
        image: abraxas,
        current: true,
        dates:         
        {
            "start" : "01.02.2023",
            "end" : "{today}"
        },
        position: 
        {
            date: "left",
            card: "right"
        }
    }
]