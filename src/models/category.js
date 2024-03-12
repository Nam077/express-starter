import { Entity, EntitySchema } from 'typeorm';

const Category = new EntitySchema({
    name: 'Category',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
            unique: true,
        },
        description: {
            type: String,
            nullable: true,
        },
        created_at: {
            type: 'datetime',
            createDate: true,
        },
    },
});

export default Category;
