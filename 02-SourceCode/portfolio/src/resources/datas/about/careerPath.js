// Import images
import abraxas from '../../images/about/careerPath/abraxas.png';
import etml from '../../images/about/careerPath/etml.png';
import school from '../../images/about/careerPath/school.png';

export const CareerPath = 
[
    {
        name: "school",
        image: school,
        dates: "01.01.2008 - 31.08.2018",
        position: 
        {
            date: "right",
            card: "left"
        }
    },
    {
        name: "etml",
        image: etml,
        dates: "01.02.2019 - {today}",
        position: 
        {
            date: "left",
            card: "right"
        }
    },
    {
        name: "abraxas",
        image: abraxas,
        dates: "01.02.2023 - {today}",
        position: 
        {
            date: "left",
            card: "right"
        }
    }
]