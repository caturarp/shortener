import { PrimaryKey, Table, Column, Model, Scopes, BelongsTo, ForeignKey, HasMany, AutoIncrement, AllowNull } from "sequelize-typescript";

@Table({ tableName: "shorts", schema: "public" })
export default class Short extends Model<Short> {

	@PrimaryKey
	@AutoIncrement
	@Column
	id!: bigint;

	@AllowNull(false)
	@Column
	url!: string;

    @AllowNull(false)
	@Column
	link!: string;
}
