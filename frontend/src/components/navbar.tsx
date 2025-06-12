'use client';

import Link from "next/link";
import { useAuth } from "@/contexts/authcontext";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import styled from 'styled-components';

const RetroNav = styled.nav`
  font-family: 'Press Start 2P', 'Courier New', Courier, monospace;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const RetroInput = styled.input`
  height: 40px;
  padding: 0 12px;
  font-size: 1rem;
  font-family: inherit;
  background: #ededed;
  color: #0f0f0f;
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
  background: #19181c;
  color: #fff;
  border: 2px solid #19181c;
  border-left: none;
  border-radius: 0;
  cursor: pointer;
  text-shadow: 1px 1px #0a0a0a;
  transition: background 0.1s;
  &:hover {
    background: #232136;
    color: #00c6fb;
  }
`;

const RetroLink = styled.a`
  background: #19181c;
  color: #fff;
  border: 2px solid #19181c;
  border-radius: 0;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 1rem;
  text-decoration: none;
  margin-right: 0.5rem;
  transition: background 0.1s, color 0.1s;
  &:hover {
    background: #232136;
    color: #00c6fb;
  }
`;

const RetroAction = styled.button`
  background: #19181c;
  color: #fff;
  border: 2px solid #19181c;
  border-radius: 0;
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  text-shadow: 1px 1px #0a0a0a;
  margin-left: 0.5rem;
  transition: background 0.1s;
  &:hover {
    background: #b91c1c;
    color: #fff;
  }
`;

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/database?search=${encodeURIComponent(searchQuery.trim())}`);
        } else {
            router.push('/database');
        }
    };

    return (
        <RetroNav>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <Link href="/" passHref legacyBehavior>
                    <RetroLink style={{ fontWeight: 'bold', fontSize: '1.2rem', background: 'transparent', border: 'none', color: '#0078d7', textShadow: '1px 1px #19181c' }}>
                        Nextage
                    </RetroLink>
                </Link>

                <form onSubmit={handleSearch} className="flex w-full md:w-auto md:max-w-md">
                    <RetroInput
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for games..."
                    />
                    <RetroButton type="submit">SEARCH</RetroButton>
                </form>

                <div className="flex items-center space-x-2">
                    <Link href="/database" passHref legacyBehavior>
                        <RetroLink>Database</RetroLink>
                    </Link>
                    {isAuthenticated ? (
                        <div className="flex items-center gap-2">
                            <Link href="/dashboard" passHref legacyBehavior>
                                <RetroLink>Dashboard</RetroLink>
                            </Link>
                            <Link href={`/profile/${user?.username}`} passHref legacyBehavior>
                                <RetroLink>Profile</RetroLink>
                            </Link>
                            <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', color: '#13111c' }}>
                                Hello, {user?.username}
                            </span>
                            <RetroAction onClick={logout}>Logout</RetroAction>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" passHref legacyBehavior>
                                <RetroLink style={{ background: 'linear-gradient(90deg, #13111c 0%, #00c6fb 100%)', color: 'white' }}>
                                    Login
                                </RetroLink>
                            </Link>
                            <Link href="/register" passHref legacyBehavior>
                                <RetroLink style={{ background: '#16a34a', color: 'white' }}>
                                    Register
                                </RetroLink>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </RetroNav>
    );
};

export default Navbar;