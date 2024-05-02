import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Songs from './Songs';
import FavoriteList from './FavoriteList';
import ErrorPage from '../pages/ErrorPage';
import Login from './Login';
import Logout from './Logout';
import Header from './Header';
import ErrorSearch from './ErrorSearch';

const Router = (props) => {
	const {
		showLogoutInfo,
		isLogged,
		songs,
		handleToggleFavorite,
		handleLogoutConfirm,
		handleLogoutCancel,
		handleChangeLogin,
		handleLoginSubmit,
		showError,
		loginError,
		value,
		change,
		submit,
		click,
	} = props;

	return (
		<BrowserRouter>
			<Header
				value={value}
				change={change}
				submit={submit}
				click={click}
				showLogoutInfo={showLogoutInfo}
			/>

			<Routes>
				{!showLogoutInfo && (
					<Route
						path="/"
						element={
							isLogged && !showLogoutInfo ? (
								<Songs result={songs} click={handleToggleFavorite} />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
				)}

				{!showLogoutInfo && (
					<Route
						path="/favorite"
						element={
							isLogged && !showLogoutInfo ? (
								<FavoriteList songs={songs} click={handleToggleFavorite} />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
				)}

				{showLogoutInfo && (
					<Route
						path="/"
						element={
							<Logout
								clickConfirm={handleLogoutConfirm}
								clickCancel={handleLogoutCancel}
							/>
						}></Route>
				)}
				<Route
					path="/login"
					element={
						!isLogged ? (
							<Login
								change={handleChangeLogin}
								submit={handleLoginSubmit}
								loginError={loginError}
							/>
						) : (
							<Navigate to="/" />
						)
					}
				/>
				<Route path="*" element={<ErrorPage />}></Route>
			</Routes>
			{showError && <ErrorSearch />}
		</BrowserRouter>
	);
};

export default Router;