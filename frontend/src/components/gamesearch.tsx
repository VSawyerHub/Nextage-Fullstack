import React, {useEffect, useState} from 'react';
import { Input } from 'pixel-retroui';
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
            className="flex max-w-md flex-1 mx-4"
        >
            <Input
                type="text"
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="#d6d6d6"
                textColor="#1a1a1a"
                borderColor="#422424"
                spellCheck="false"
                maxLength={24}
                placeholder="Search for games..."
                className="w-full h-12 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-game-blue/50"
                style={{
                    fontSize: '20px',
                    letterSpacing: '0.5px',
                }}
            />
        </Form>
        </Search>
  );
};

export default GameSearch;