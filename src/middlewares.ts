import express from 'express';
import morgan from 'morgan';

const configureMiddlewares = (app: express.Application) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(morgan('dev'))
};

export { configureMiddlewares };