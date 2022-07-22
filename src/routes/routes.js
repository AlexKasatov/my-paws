import loadable, { lazy } from '@loadable/component';
import pMinDelay from 'p-min-delay';

import { Suspense } from 'react';
import Spiner from '../animation/Spiner';

const SearchBreed = lazy(() => import('../pages/SearchBreed'));
const Info = loadable(() => import('../pages/Breeds/Info'));
const Voting = lazy(() => import('../pages/Voting'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Likes = lazy(() => import('../pages/Likes'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Fav = lazy(() => import('../pages/Fav'));
const Dislikes = lazy(() => import('../pages/Dislikes'));
const Breeds = loadable(() => import('../pages/Breeds'));
const Home = lazy(() => pMinDelay(import('../pages/Home'), 500));

export const publicRoutes = [
        {
                index: true,
                element: (
                        <Suspense fallback={<Spiner />}>
                                <Home />
                        </Suspense>
                ),
                replace: false,
        },
        {
                index: false,
                path: '/breeds',
                element: <Breeds />,
                replace: false,
        },
        { index: false, path: '/gallery', element: <Gallery />, replace: false },

        {
                index: false,
                path: '/likes',
                element: <Likes />,
                replace: false,
        },
        { index: false, path: '/breeds/info/:id', element: <Info />, replace: false },
        { index: false, path: '/dislike', element: <Dislikes />, replace: false },
        { index: false, path: '/fav', element: <Fav />, replace: false },
        { index: false, path: '/voting', element: <Voting />, replace: false },
        { index: false, path: '/search/:id', element: <SearchBreed />, replace: false },
        { index: false, path: '*', element: <NotFound />, replace: false },
];
