from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from .forms import RequestForm
from .models import Article
from .models import Category

from django.shortcuts import render, get_object_or_404
from .models import Article
from babel.dates import format_date

def article(request, slug):
    article = get_object_or_404(Article, slug=slug)

    # Форматирование дат с использованием Babel
    created_at_formatted = format_date(article.created_at, format='long', locale='ru')
    updated_at_formatted = format_date(article.updated_at, format='long', locale='ru')

    return render(request, 'article.html', {
        'article': article,
        'created_at_formatted': created_at_formatted,
        'updated_at_formatted': updated_at_formatted
    })


from django.shortcuts import render, get_object_or_404
from django.shortcuts import render
from .models import Guide

from django.shortcuts import render
from .models import Guide, GuidesCategory

def guides(request):
    guides = Guide.objects.all()
    categories = GuidesCategory.objects.all()  # Fetch categories
    return render(request, 'guides.html', {'guides': guides, 'categories': categories})



def home(request):
    form = RequestForm()  
    return render(request, 'home.html', {'form': form})

def policy(request):
    return render(request, 'policy.html')

from django.shortcuts import render
from .models import Article, Category

def posts(request):
    category_slug = request.GET.get('category', 'all')  # Получаем slug категории из URL
    categories = Category.objects.all()
    
    if category_slug == 'all':
        articles = Article.objects.all()  # Если выбраны все категории, показываем все статьи
    else:
        try:
            selected_category = Category.objects.get(slug=category_slug)
            articles = Article.objects.filter(category=selected_category)
        except Category.DoesNotExist:
            articles = Article.objects.all()  # Если категории нет, показываем все статьи
    
    return render(request, 'posts.html', {'articles': articles, 'categories': categories})


from django.shortcuts import render, get_object_or_404
from .models import Guide

def subguides(request, slug):
    guide = get_object_or_404(Guide, slug=slug)
    return render(request, 'subguides.html', {'guide': guide})


def submit_request(request):
    if request.method == 'POST':
        form = RequestForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'errors': form.errors})
    return JsonResponse({'success': False})

