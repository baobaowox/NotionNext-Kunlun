import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MenuItem } from './MenuItem'

/**
 * 响应式 折叠菜单
 */
export const MenuList = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()
  const [showMenu, setShowMenu] = useState(false) // 控制菜单展开/收起状态
  const router = useRouter()
  let links = [
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('HEO_MENU_ARCHIVE')
    },
    {
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('HEO_MENU_SEARCH')
    },
    {
      icon: 'fas fa-folder',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('HEO_MENU_CATEGORY')
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('HEO_MENU_TAG')
    }
  ]
  if (customNav) {
    links = customNav.concat(links)
  }
  // 如果 开启自定义菜单，则覆盖Page生成的菜单
  if (siteConfig('CUSTOM_MENU', BLOG.CUSTOM_MENU)) {
    links = customMenu
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu) // 切换菜单状态
  }
  useEffect(() => {
    setShowMenu(false)
  }, [router])
  
  if (!links || links.length === 0) {
    return null
  }
  
  return (
    <div className="flex-1 flex justify-end">
      {/* 完全不渲染移动端菜单切换按钮 */}
      <nav
        id='navbarCollapse'
        className="block w-auto bg-transparent">
        <ul className='flex items-center justify-end gap-6'>
          {links?.filter(link => link.show !== false).map((link, index) => (
            <MenuItem key={index} link={link} />
          ))}
        </ul>
      </nav>
    </div>
  )
}
