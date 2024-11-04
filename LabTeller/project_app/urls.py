from django.urls import path
from . import views

urlpatterns = [
    path('article/<slug:slug>/', views.article, name='article_detail'),
    path('guides/', views.guides, name='guides'),
    path('', views.home, name='home'),
    path('submit-request/', views.submit_request, name='submit_request'),
    path('policy/', views.policy, name='policy'),
    path('posts/', views.posts, name='posts'),
    path('subguides/<slug:slug>/', views.subguides, name='subguides'),
]

