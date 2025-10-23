export interface Response<T> {
	data: T;
	pagination: {
		page: number;
		item: number;
		limit: number;
	};
}
