import Head from 'next/head'
import SearchInput, { SearchInputProps } from '@/components/SearchInput'
import RepoList from '@/components/RepoList'
import RepoListItem from '@/components/RepoListItem'
import getLicense from '@/utils/getLicense'
import api from '@/api'
import useRepoList from '@/hooks/useRepoList'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import * as styles from './HomePage.styles'
import SkeletonRepoListItem from '@/components/SkeletonRepoListItem'
import ErrorRepoListItem from '@/components/ErrorRepoListItem'

export default function HomePage() {
  const {
    search,
    setSearch,
    repoStatus,
    fetchNextPage,
    isFetching,
    error,
    reFetchPage,
  } = useRepoList(api.listRepos)

  const [, endRefCallback] = useIntersectionObserver<HTMLLIElement>((entry) => {
    if (entry[0].isIntersecting) {
      try {
        if (repoStatus.ids.length < repoStatus.totalCount) {
          fetchNextPage()
        }
      } catch (error) {
        console.error(error)
      }
    }
  })

  const handleSearchInputChange: SearchInputProps['onChange'] = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className={styles.root}>
      <Head>
        <title>Browse Github Repos</title>
        <meta name="description" content="Browse Github Repos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Browse Github Repos</h1>
        <div className={styles.content}>
          <SearchInput
            label={'Search Repos'}
            value={search}
            onChange={handleSearchInputChange}
          />
          <RepoList>
            {repoStatus.ids.map((id) => {
              const repo = repoStatus.idToRepo[id]
              const license = getLicense(repo.license)

              return (
                <RepoListItem
                  key={repo.id}
                  fullName={repo.full_name}
                  htmlUrl={repo.html_url}
                  description={repo.description}
                  stargazersCount={repo.stargazers_count}
                  language={repo.language}
                  license={license}
                  pushedAt={repo.pushed_at}
                  issue={repo.open_issues}
                  topics={repo.topics}
                />
              )
            })}
            <li className={styles.scrollObserver} ref={endRefCallback}></li>
            <SkeletonRepoListItem hidden={!isFetching} />
          </RepoList>
          {error !== null && (
            <ErrorRepoListItem
              error={error}
              onRetryClick={() => {
                reFetchPage()
              }}
            />
          )}
        </div>
      </main>
    </div>
  )
}
