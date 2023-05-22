import Post from "./Post.js";
class PostController {
    async create( request, response ) {
        try {
            const { title, picture, author, content } = request.body
            const post = await Post.create( { title, picture, author, content } )
            response.json( post )

        } catch ( e ) {
            response.status( 500 ).json( e )
        }
    }

    async getAll( request, response ) {
        try {
            const posts = await Post.find();
            return response.json( posts )

        } catch ( e ) {
            response.status( 500 ).json( e )
        }
    };

    async getOne( request, response ) {
        try {
            const { id } = request.params;
            if ( !id ) {
                return response.status( 400 ).json( {
                    message: 'id не указан!'
                } )
            }
            const post = await Post.findById( id );
            response.json( post )

        } catch ( e ) {
            response.status( 500 ).json( e )
        }
    }

    async update( request, response ) {
        try {
            if ( !request.body._id ) {
                return response.status( 400 ).json( {
                    message: 'id не указан!'
                } )
            }
            const postUpdate = await Post.findByIdAndUpdate( request.body._id, request.body, { new: true } )
            response.json( postUpdate )

        } catch ( e ) {
            response.status( 500 ).json( e )
        }
    }

    async delete( request, response ) {
        try {
            if ( !request.body._id ) {
                return response.status( 400 ).json( {
                    message: 'id не указан!'
                } )
            }
            const deletedPost = await Post.findByIdAndDelete( request.body._id )
            return response.json( deletedPost )

        } catch ( e ) {
            response.status( 500 ).json( e )
        }
    }
}

export default new PostController();