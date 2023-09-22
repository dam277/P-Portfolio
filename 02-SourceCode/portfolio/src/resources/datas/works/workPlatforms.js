// Import enums
import ePlatformIds from '../enums/works/ePlatformIds';

// Import images
import web from '../../images/works/projectTypeCards/web.png';
import software from '../../images/works/projectTypeCards/software.png';
import mobile from '../../images/works/projectTypeCards/mobile.png';

const WorkPlatforms = 
[
    {
        id: ePlatformIds.web,
        image: web,
        defaultCheck : true,
    },
    {
        id: ePlatformIds.software,
        image: software,
        defaultCheck : true,
    },
    {
        id: ePlatformIds.mobile,
        image: mobile,
        defaultCheck : true,
    }
];

export default WorkPlatforms;