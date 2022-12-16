class HomeController extends MainController
{
    constructor()
    {
        super()
    }
}


let homeController = new HomeController();
const head = homeController.GetDocumentHead();
const footer = homeController.GetDocumentFooter();
const header = homeController.GetDocumentHeader();

header.innerHTML = homeController.file_get_contents("includes/header.html");