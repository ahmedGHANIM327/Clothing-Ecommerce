import './page-title.scss'

const PageTitle = ({page_title}) => {
    return (
        <div className='page_title_container'>
            <h1>{page_title}</h1>
        </div>
    )
}

export default PageTitle