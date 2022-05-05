//import { Home } from './Home';
import { PageDetail } from './PageDetail';
import { PageList, next, PageListSearch, PageListSearchByGenre, PageListSearchByDev, PageListSearchByTags, PageListSearchByPublishers, PageListSearchByPlatforms } from './PageList';

const routes = {
    //'': Home,
    '': PageList,
    '#search': PageListSearch,
    'search-by-genre': PageListSearchByGenre,
    'search-by-dev': PageListSearchByDev,
    'search-by-tags': PageListSearchByTags,
    'search-by-publishers': PageListSearchByPublishers,
    'search-by-platforms': PageListSearchByPlatforms,
    'pagedetail': PageDetail,
};
//#search-by-publishers/${publisher.id}
//#search-by-platforms/${plat.platform.id}

export { routes };