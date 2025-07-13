import { siteConfig } from '@/lib/config'
import SocialButton from '@/themes/fukasawa/components/SocialButton'
import { Logo } from './Logo'
import { SVGFooterCircleBG } from './svg/SVGFooterCircleBG'
import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
export const Footer = props => {
  const STARTER_FOOTER_LINK_GROUP = siteConfig('STARTER_FOOTER_LINK_GROUP', [])
  return (
    <>
      {/* <!-- ====== Footer Section Start --> */}
      <footer
        className='wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]'
        data-wow-delay='.15s'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12'>
              <div className='mb-10 w-full'>
                <a className='-mx-4 mb-6 inline-block max-w-[160px]'>
                  <Logo white={true} />
                </a>
                <p className='mb-8 max-w-[270px] text-base text-gray-7'>
                  {siteConfig('STARTER_FOOTER_SLOGAN')}
                </p>
                <div className='-mx-3 flex items-center'>
                  <div className='mx-3'>
                    <SocialButton />
                  </div>
                </div>
              </div>
            </div>

            {/* 中间三列菜单组 */}
            {STARTER_FOOTER_LINK_GROUP?.map((item, index) => (
              <div
                key={index}
                className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'>
                <div className='mb-10 w-full'>
                  <h4 className='mb-9 text-lg font-semibold text-white'>
                    {item.TITLE}
                  </h4>
                  <ul>
                    {item?.LINK_GROUP?.map((l, i) => (
                      <li key={i}>
                        <Link
                          href={l.URL}
                          className='mb-3 inline-block text-base text-gray-7 hover:text-primary'>
                          {l.TITLE}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部版权信息相关（已去掉右侧版权文字） */}
        <div className='mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]'>
          <div className='container'>
            <div className='-mx-4 flex flex-wrap'>
              <div className='w-full px-4'>
                <div className='my-1'>
                  <div className='flex items-center justify-center md:justify-start'>
                    <Link
                      href={siteConfig('STARTER_FOOTER_PRIVACY_POLICY_URL', '')}
                      className='px-3 text-base text-gray-7 hover:text-white hover:underline'>
                      {siteConfig('STARTER_FOOTER_PRIVACY_POLICY_TEXT')}
                    </Link>
                    <Link
                      href={siteConfig(
                        'STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL', ''
                      )}
                      className='px-3 text-base text-gray-7 hover:text-white hover:underline'>
                      {siteConfig('STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT')}
                    </Link>
                    <Link
                      href={siteConfig(
                        'STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL', ''
                      )}
                      className='px-3 text-base text-gray-7 hover:text-white hover:underline'>
                      {siteConfig(
                        'STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT', ''
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer 背景 */}
        <div>
          <span className='absolute left-0 top-0 z-[-1]'>
            <img src='/images/starter/footer/shape-1.svg' alt='' />
          </span>
          <span className='absolute bottom-0 right-0 z-[-1]'>
            <img src='/images/starter/footer/shape-3.svg' alt='' />
          </span>
          <span className='absolute right-0 top-0 z-[-1]'>
            <SVGFooterCircleBG />
          </span>
        </div>
      </footer>
      {/* <!-- ====== Footer Section End --> */}
    </>
  )
}
