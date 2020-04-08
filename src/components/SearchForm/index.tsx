import "whatwg-fetch";
import "promise-polyfill/src/polyfill";
import * as React from "react";
import {
  SearchSectionWrapper,
  SearchBlockWrapper,
  ResultWrapper,
  AddressList
} from "./SearchFromStyles";
import {Root, Project}from '../../types/data';

interface ISearchFormProps {
}

export const FinnSearch: React.FunctionComponent<ISearchFormProps> = ({
}) => {
  const [list, setList] = React.useState<Project[]>([]);

  async function useSearchService() {
    try {
      const data:Root = await (await fetch(
        `http://localhost:8001/projects`
      )).json();

      console.log(data);


        setList(data.projects);

    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    useSearchService();
      }, []);

      console.log(list);

  return (
    <SearchSectionWrapper>
      <SearchBlockWrapper>
      <ResultWrapper>
            {list && (
              <AddressList>
                {list.map((element) => {
                  return (
                    <li key={element.id}>
                      {`${element.name}`}
                    </li>
                  );
                })}
              </AddressList>
            )}
          </ResultWrapper>
      </SearchBlockWrapper>
    </SearchSectionWrapper>
  );
};

export default FinnSearch;
