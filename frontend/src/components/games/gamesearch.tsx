import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  font-size: 20px;
  letter-spacing: 0.5px;
  background-color: #d6d6d6;
  color: #1a1a1a;
  border: 1px solid #422424;
  border-radius: 8px 0 0 8px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.5);
  }
`;

const GameSearch: React.FC = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        if (router.query.search && typeof router.query.search === 'string') {
            setSearchQuery(router.query.search);
        }
    }, [router.query.search]);

    return (
        <Search>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const searchTerm = formData.get('search') as string;

                    // Force a reload with the search parameter, even if it's the same
                    router.push({
                        pathname: '/database',
                        query: { search: searchTerm, t: Date.now() }
                    });
                }}
            >
                <SearchInput
                    type="text"
                    name="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    spellCheck="false"
                    maxLength={24}
                    placeholder="Search for games..."
                />
            </Form>
        </Search>
    );
};

export default GameSearch;