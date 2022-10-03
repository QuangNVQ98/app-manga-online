import { environment } from '../../../environments/environment';

/**
 * URL API HOME PAGE
 */
export const HOME_PAGE_LIST_COMIC = environment.base_url_api + 'api/home-page/get-list-newest-comic';
// export const HOME_PAGE_LIST_COMIC = 'https://server-manga.vercel.app/api/home-page/get-list-newest-comic';

/**
 * URL API MANGA PAGE
 */
export const MANGA_PAGE_INFORS_COMIC = environment.base_url_api + 'api/manga-page/get-infors-comic';

/**
 * URL API MANGA PAGE
 */
export const READING_PAGE_LIST_IMAGES = environment.base_url_api + 'api/reading-page/get-list-images';

/**
 * URL API FIND PAGE
 */
export const FIND_PAGE_LIST_COMIC = environment.base_url_api + 'api/find-page/get-list-comics';
export const FIND_PAGE_LIST_CATE = environment.base_url_api + 'api/find-page/get-list-category';
