module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'dema-cms'),
			user: env('DATABASE_USERNAME', 'dema'),
			password: env('DATABASE_PASSWORD', 'admin'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
