// Import enums
import eProjectsTypeIds from '../enums/works/ePlatformIds';

// Import images
import web from '../../images/works/projectTypeCards/web.png';
import software from '../../images/works/projectTypeCards/software.png';
import mobile from '../../images/works/projectTypeCards/mobile.png';

const ProjectTypes = 
[
    {
        id: eProjectsTypeIds.web,
        image: web,
        defaultCheck : true,
    },
    {
        id: eProjectsTypeIds.software,
        image: software,
        defaultCheck : true,
    },
    {
        id: eProjectsTypeIds.mobile,
        image: mobile,
        defaultCheck : true,
    }
];

export default ProjectTypes;