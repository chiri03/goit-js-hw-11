
import Notiflix from 'notiflix';
import axios from './axios';
import { renderGallery } from './galery';
const AxiosApi = new axios();
const form = document.getElementById('search-form');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');
loadMoreBtn.style.display = 'none';

loadMoreBtn.addEventListener('click', loadMoreImages);
form.addEventListener('submit', searchImage);

