import { useTranslation } from 'react-i18next'

const useHeaderData = () => {
  const { t } = useTranslation()
  const headerMenuList = [
    {
      id: 'home',
      path: '/',
      title: t('common:header.menuList.home'),
      pageTitle: t('common:header.pageHeaderList.home'),
    },
    {
      id: 'about',
      path: '/about',
      title: t('common:header.menuList.about'),
      pageTitle: t('common:header.pageHeaderList.about'),
    },
    // {
    //   id: 'careers',
    //   path: '/careers',
    //   title: t('common:header.menuList.careers'),
    // },
    {
      id: 'game',
      path: '/game',
      title: t('common:header.menuList.game'),
      pageTitle: t('common:header.pageHeaderList.game'),
    },
  ]
  return {
    headerMenuList,
  }
}
export { useHeaderData }
