
import React, { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { CopyIcon, Code2, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [htmlOutput, setHtmlOutput] = useState('');
  const [showConverter, setShowConverter] = useState(false);
  const { toast } = useToast();

  const convertToHtml = () => {
    // Получаем HTML-код лендинга
    const landingHtml = document.getElementById('landing-container')?.innerHTML || '';
    
    // Очищаем от data-атрибутов React и других служебных атрибутов
    const cleanedHtml = landingHtml
      .replace(/\s+data-[^=]+=["'][^"']*["']/g, '')
      .replace(/\s+class=/g, ' class=');
    
    // Создаем базовый HTML документ
    const fullHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Лендинг</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
${cleanedHtml}
</body>
</html>`;
    
    setHtmlOutput(fullHtml);
    toast({
      title: "HTML-код сгенерирован",
      description: "Теперь вы можете скопировать или скачать HTML-код",
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlOutput);
    toast({
      title: "Скопировано!",
      description: "HTML-код скопирован в буфер обмена",
    });
  };

  const downloadHtml = () => {
    const blob = new Blob([htmlOutput], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
      title: "Файл скачан",
      description: "HTML-файл лендинга был скачан",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      {!showConverter ? (
        <div id="landing-container">
          <LandingPage />
          <div className="fixed bottom-10 right-10">
            <Button 
              onClick={() => setShowConverter(true)} 
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Code2 className="mr-2 h-4 w-4" />
              Конвертировать в HTML
            </Button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Конвертация лендинга в HTML</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Превью лендинга</h2>
              <div className="border rounded-md p-4 max-h-96 overflow-auto bg-white">
                <LandingPage />
              </div>
            </Card>
            
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">HTML код</h2>
              {!htmlOutput ? (
                <div className="flex justify-center items-center h-64">
                  <Button onClick={convertToHtml} className="bg-blue-600 hover:bg-blue-700">
                    Сгенерировать HTML код
                  </Button>
                </div>
              ) : (
                <>
                  <Textarea 
                    value={htmlOutput} 
                    className="h-64 font-mono text-sm" 
                    readOnly 
                  />
                  <div className="flex gap-2 mt-4">
                    <Button onClick={copyToClipboard} variant="outline" className="flex-1">
                      <CopyIcon className="mr-2 h-4 w-4" />
                      Копировать
                    </Button>
                    <Button onClick={downloadHtml} variant="outline" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Скачать HTML
                    </Button>
                  </div>
                </>
              )}
            </Card>
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={() => setShowConverter(false)} 
              variant="outline"
            >
              Вернуться к лендингу
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
