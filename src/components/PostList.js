import React, { Component } from 'react';

import PostItem from './PostItem';
import fotoPerfil from '../assets/foto-perfil.png';

class PostList extends Component {
   /**
   * Guarda todas as informações que podem ser manipuladas
   * por esse componente, ou seja, podem receber novos itens...
   */
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Karina Gomes',
          avatar: fotoPerfil
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: fotoPerfil
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos d eolho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: fotoPerfil
            },
            content: "Opa! Olha a resposta do Diego! Ótima oportunidade para se destacar"
          }
        ],
      },
      {
        id: 2,
        author: {
          name: '[Nome do usuário]',
          avatar: ''
        },
        date: '[Data]',
        content: '[Post]',
        comments: [
          {
            id: 2,
            author: {
              name: '[Nome do usuário]',
              avatar: ''
            },
            content: "Conteúdo do comentário"
          }
        ],
      }
    ]
  };

  render() {
    return (
      <div className='post-list'>
       {this.state.posts.map(post =>(
         <div className='container'>
          <PostItem key={post.id} post={post}/>
         </div>
       ))}
      </div>
    );
  }
}

export default PostList;