class MainController
{
    //_page;

    constructor(/*page*/) 
    {
        //this._page = page;
    }

    Redirect() 
    {
        window.location.href = "src/pages/home.html";
    }

    GetDocumentHead()
    {
        return document.querySelector("head");
    }

    GetDocumentHeader()
    {
        return document.querySelector("header");
    }

    GetDocumentFooter()
    {
        return document.querySelector("footer");
    }

    file_get_contents(path)
    {
        let fileReader = new FileReader(); 
        fileReader.readAsText(location.pathname+"/../"+path); 
        fileReader.onload = function() {
          alert(fileReader.result);
        }; 
        fileReader.onerror = function() {
          alert(fileReader.error);
        }; 
    }
}



















 // switch (this._page) 
        // {
        //     case Page.about:
        //         break;
        //     case Page.channelManager:
        //         break;
        //     case Page.contact:
        //         break;
        //     case Page.dino:
        //         break;
        //     case Page.gamesApiManager:
        //         break;
        //     case Page.heroesFight:
        //         break;
        //     case Page.home:
        //         break;
        //     case Page.launcher:
        //         break;
        //     case Page.minecraftDatapack:
        //         break;
        //     case Page.minecraftMod:
        //         break;
        //     case Page.minecraftPlugin:
        //         break;
        //     case Page.proceduralDungeon:
        //         break;
        //     default:
        //         break;
        // }