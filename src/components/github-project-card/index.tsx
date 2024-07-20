import { Fragment } from 'react';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';
import { ga, getLanguageColor, skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  username,
  googleAnalyticsId,
  demos,
  previews
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  username: string;
  googleAnalyticsId?: string;
  demos: Array<string>;
  previews: Array<string>;
}) => {
  if (!loading && githubProjects.length === 0) {
    return;
  }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="compact bg-base-100" key={"main_" + index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderProjects = () => {
    return githubProjects.map((item, index) => (
      <div
        className="card compact bg-base-100" key={item.name}
      >
        <div className="flex justify-between flex-col p-4 h-full w-full">
          <div>
            <div className="flex items-center truncate">
              <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                <MdInsertLink className="my-auto" />
                <a href={item.html_url}
                  // key={"html_" + index}
                  onClick={(e) => {
                    e.preventDefault();

                    try {
                      if (googleAnalyticsId) {
                        ga.event('Click project', {
                          project: item.name,
                        });
                      }
                    } catch (error) {
                      console.error(error);
                    }

                    window?.open(item.html_url, '_blank');
                  }}
                  className='compact'
                >
                  <span>{item.name}</span>
                </a>
                {demos.length > 0 && demos[index].length > 0 ? 
                  <a href={demos[index]}
                  // key={"demo_" + index}
                  className=' py-1 px-1 compact text-xs text-gray-600 hover:bg-gray-600 hover:text-base-100 hover:border-transparent rounded-sm'
                >
                  DEMO
                </a> : ''
                }
              </div>
            </div>
            <div className='flex'>
            <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm grow">
              {item.description}
            </p>
            </div>
          </div>
          <div className='grow mb-4 active:scale-[2] active:z-[100] cursor-zoom-in'>
            {previews.length > 0 && previews[index].length > 0 ? 
              <img src={previews[index]}
              // key={"demo_" + index}
              className='mt-4  border-primary border-opacity-60 border-solid border-2 rounded-lg' /> : ''
            }
          </div>
          <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
            <div className="flex flex-grow">
              <span className="mr-3 flex items-center">
                <AiOutlineStar className="mr-0.5" />
                <span>{item.stargazers_count}</span>
              </span>
              <span className="flex items-center">
                <AiOutlineFork className="mr-0.5" />
                <span>{item.forks_count}</span>
              </span>
            </div>
            <div>
              <span className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-1 opacity-60"
                  style={{ backgroundColor: getLanguageColor(item.language) }}
                />
                <span>{item.language}</span>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between text-sm text-base-content text-opacity-60 truncate">
            <div>
              <span className="flex flex-wrap items-center">
                {item.topics.map((topic) => <div className="m-1 topic-button rounded-md badge-primary px-3 py-1 bg-opacity-5 text-xs leading-sm text-primary font-bold capitalize" key={item.name + "_" + topic}>{topic.replace(/\-/g, " ")} </div>)}
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                  {loading ? (
                    skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
                  ) : (
                    <a
                      href={`https://github.com/${username}?tab=repositories`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content opacity-50 hover:underline"
                    >
                      See All
                    </a>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GithubProjectCard;
