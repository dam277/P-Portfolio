function getTranslations(actualLanguage, fr, en)
{
    switch (actualLanguage) 
    {
        case 'FR': return fr;
        case 'EN': return en;
        default: return en;
    }
}

export default getTranslations;