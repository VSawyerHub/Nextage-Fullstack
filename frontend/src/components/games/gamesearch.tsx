import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const RetroSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: var(--background);
  border: 4px double #19181c;
  border-radius: 0;
  box-shadow: 0 0 0 4px #ededed, 0 8px 24px rgba(0,0,0,0.4);
  font-family: 'Press Start 2P', 'Courier New', Courier, monospace;
  padding: 0.5rem 1rem;
`;

const RetroForm = styled.form`
  display: flex;
  width: 100%;
`;

const RetroInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 12px;
  font-size: 1rem;
  font-family: inherit;
  background: #ededed;
  color: #19181c;
  border: 2px solid #19181c;
  border-right: none;
  border-radius: 0;
  outline: none;
  box-shadow: none;
  letter-spacing: 1px;
  transition: border 0.1s;
  &:focus {
    border-color: #0078d7;
    background: #fff;
  }
`;

const RetroButton = styled.button`
  height: 40px;
  padding: 0 18px;
  font-size: 1rem;
  font-family: inherit;
  background: #0078d7;
  color: #fff;
  border: 2px solid #19181c;
  border-left: none;
  border-radius: 0;
  cursor: pointer;
  text-shadow: 1px 1px #19181c;
  transition: background 0.1s;
  &:hover {
    background: #00c6fb;
    color: #19181c;
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
        <RetroSearch className="my-6">
            <RetroForm
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const searchTerm = formData.get('search') as string;
                    router.push({
                        pathname: '/database',
                        query: { search: searchTerm, t: Date.now() }
                    });
                }}
            >
                <RetroInput
                    type="text"
                    name="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    spellCheck="false"
                    maxLength={24}
                    placeholder="Search for games..."
                />
                <RetroButton type="submit">SEARCH</RetroButton>
            </RetroForm>
        </RetroSearch>
    );
};

export default GameSearch;